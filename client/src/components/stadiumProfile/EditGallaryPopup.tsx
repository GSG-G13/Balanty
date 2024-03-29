import {
  ChangeEvent,
  FC,
  ReactElement,
  useContext,
  useRef,
  useState,
} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { EditGalleryPopupProps, customPalette } from '../../interfaces';

import {
  DialogContentBox,
  GalleryAction,
  InputLabel,
  SelectBox,
  SelectButtonsBox,
  SelectTypography,
} from './StadiumProfile.styled';
import Loader from './Loader';
import { UpdateGalleryContext } from '../../context';

const EditGalleryPopup: FC<EditGalleryPopupProps> = ({
  editGallery,
  setEditGallery,
  ImageId,
  userId,
  gallery,
  loading,
  setLoading,
  type,
}): ReactElement => {
  const [newImage, setNewImage] = useState<string>('');
  const [newFile, setNewFile] = useState<File>();
  const [imageError, setImageError] = useState(false);

  const { setAgree, Agree } = useContext(UpdateGalleryContext);
  const { id } = useParams();

  const fileInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleClose = () => {
    if (fileInput.current) {
      fileInput.current.value = '';
    }
    setNewFile(undefined);
    setNewImage('');
    setEditGallery(false);
    setLoading(false);
    setImageError(false);
  };
  const presetKey = 'ry6frp8c';
  const cloudName = 'dtpbcx2kv';

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presetKey);
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
    );

    return data.secure_url;
  };

  const selectNewImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    setImageError(false);
    setLoading(false);
    if (files && files.length > 0) {
      let uploadedImage = '';
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        uploadedImage = reader.result as string;
        setNewImage(uploadedImage);
      });
      reader.readAsDataURL(files[0]);

      setNewFile(files[0]);
    }
  };

  const handleSave = async () => {
    if (!newFile) {
      setImageError(true);
    } else if (type === 'stadium') {
      try {
        setLoading(true);
        const newUrl = await uploadImage(newFile as File);
        const res = await axios.patch('/api/v1/stadiums/gallery', {
          image: newUrl,
          id: ImageId,
          StadiumId: userId,
          userId: id,
        });

        setLoading(false);
        setAgree(!Agree);
        handleClose();
        if (res.data.status !== 200) {
          navigate('serverError');
        }
      } catch (error) {
        setLoading(false);
        navigate('serverError');
      }
    } else if (type === 'avatar') {
      setLoading(true);
      try {
        const newUrl = await uploadImage(newFile as File);
        const res = await axios.patch(`/api/v1/players/avatar/${userId}`, {
          newAvatar: newUrl,
        });

        setLoading(false);
        setAgree(!Agree);
        handleClose();
        if (res.data.status !== 200) {
          navigate('serverError');
        }
      } catch (error) {
        setLoading(false);
        navigate('serverError');
      }
    } else if (type === 'cover') {
      setLoading(true);
      try {
        const newUrl = await uploadImage(newFile as File);
        const res = await axios.patch(`/api/v1/players/cover/${userId}`, {
          newCover: newUrl,
        });

        setLoading(false);
        setAgree(!Agree);
        handleClose();
        if (res.data.status !== 200) {
          navigate('serverError');
        }
      } catch (error) {
        setLoading(false);
        navigate('serverError');
      }
    }
  };

  const handleAddNew = async () => {
    try {
      setLoading(true);
      if (!newFile) {
        setImageError(true);
      } else {
        const newUrl = await uploadImage(newFile as File);
        const res = await axios.post('/api/v1/stadiums/gallery', {
          image: newUrl,
          StadiumId: userId,
          userId: id,
        });
        setLoading(false);
        setAgree(!Agree);
        handleClose();
        if (res.data.status !== 200) {
          navigate('serverError');
        }
      }
    } catch (error) {
      setLoading(false);
      navigate('serverError');
    }
  };

  const border = () => {
    return imageError ? '2px dashed red' : '2px dashed #ccc';
  };

  return (
    <Box>
      <Dialog open={editGallery} onClose={handleClose}>
        {!imageError && loading ? <Loader /> : null}

        <DialogTitle
          sx={{
            width: '100%',
            backgroundColor: theme =>
              (theme.palette as customPalette).customColors.grayColor,
            textAlign: 'right',
            color: '#4c8942',
            pr: '32px',
          }}
        >
          اضافة صورة جديدة
        </DialogTitle>
        <DialogContentBox
          sx={{
            backgroundColor: theme =>
              (theme.palette as customPalette).customColors.grayColor,
          }}
        >
          <InputLabel htmlFor="input">
            <SelectBox
              sx={{
                mt: '10px',
                border,
                backgroundImage: `url(${newImage})`,
                backgroundPosition: type === 'stadium' ? 'bottom' : 'center',
              }}
            >
              {imageError ? (
                <SelectTypography
                  sx={{
                    color: 'red',
                    borderBottom: '1px solid red',
                  }}
                >
                  ! يجب اختيار الصورة أولا
                </SelectTypography>
              ) : (
                <SelectTypography
                  sx={{
                    borderBottom: '1px solid #152c11',
                  }}
                >
                  اختيار صورة جديدة
                </SelectTypography>
              )}
            </SelectBox>
            <input
              id="input"
              style={{
                display: 'none',
              }}
              type="file"
              accept="image/*"
              multiple
              onChange={selectNewImage}
              ref={fileInput}
            />
          </InputLabel>
        </DialogContentBox>
        <DialogActions
          sx={{
            backgroundColor: theme =>
              (theme.palette as customPalette).customColors.grayColor,
          }}
        >
          <SelectButtonsBox
            sx={{
              mb: '10px',
            }}
          >
            <GalleryAction onClick={handleClose}>الغاء</GalleryAction>
            {type === 'stadium' && gallery.length < 4 && (
              <GalleryAction onClick={handleAddNew}>
                اضافة كصورة جديدة
              </GalleryAction>
            )}
            <GalleryAction onClick={handleSave}>حفظ</GalleryAction>
          </SelectButtonsBox>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditGalleryPopup;
