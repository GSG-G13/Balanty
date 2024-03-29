import { FC, ReactElement, useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';

import {
  ArrowStyle,
  DeleteButton,
  EditGalleryButton,
  SliderBox,
  SliderImage,
  ThumbnailBox,
  ThumbnailImage,
} from './StadiumProfile.styled';

import {
  StadiumGallery,
  StadiumProfileProps,
} from '../../interfaces/StadiumProfile';

import EditGalleryPopup from './EditGallaryPopup';
import DeleteDialog from './DeleteDialog';

import 'react-slideshow-image/dist/styles.css';

const ImageSlider: FC<StadiumProfileProps> = ({
  gallery,
  setEditGallery,
  editGallery,
  deleteDialog,
  setDeleteDialog,
  EditAble,
}): ReactElement => {
  const [Active, setActive] = useState(0);
  const [imageHover, setImageHover] = useState(false);
  const [ImageId, setImageId] = useState(0);
  const [StadiumId, setStadiumId] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const deleteDialogOpen = (id: number) => {
    setImageId(id);
    setDeleteDialog(true);
  };

  const deleteDialogClose = () => {
    setDeleteDialog(false);
  };

  const handleSlideChange = (currentSlide: number, e: number) => {
    const { id } = gallery[e];
    setActive(id);
  };

  const handleAddImage = (id: number) => {
    setImageId(id);
    setEditGallery(true);
  };

  useEffect(() => {
    setStadiumId(gallery[0].StadiumId);
  }, [gallery]);

  return (
    <Box>
      <DeleteDialog
        deleteDialog={deleteDialog}
        handleClose={deleteDialogClose}
        ImageId={ImageId}
        StadiumId={StadiumId}
        loading={loading}
        setLoading={setLoading}
      />
      <EditGalleryPopup
        editGallery={editGallery}
        setEditGallery={setEditGallery}
        ImageId={ImageId}
        userId={StadiumId}
        gallery={gallery}
        loading={loading}
        setLoading={setLoading}
        type="stadium"
      />
      <SliderBox
        sx={{
          ml: '20px',
        }}
      >
        <Slide
          prevArrow={
            <ArrowStyle
              onAbort={() => {
                setActive(0);
              }}
              style={{ left: '20px' }}
            >
              <ArrowBackIosIcon />
            </ArrowStyle>
          }
          nextArrow={
            <ArrowStyle style={{ right: '20px' }}>
              <ArrowForwardIosIcon />
            </ArrowStyle>
          }
          onChange={handleSlideChange}
        >
          {gallery.map((image: StadiumGallery) => {
            return (
              <Box
                key={image.id}
                sx={{
                  width: '100%',
                  height: '75vh',
                  mt: '6%',
                }}
              >
                <SliderImage
                  sx={{
                    position: 'relative',
                    backgroundImage: `url(${image.image})`,
                  }}
                  onMouseEnter={() => setImageHover(true)}
                  onMouseLeave={() => setImageHover(false)}
                >
                  {EditAble && imageHover && (
                    <>
                      <EditGalleryButton
                        sx={{
                          right: '2%',
                        }}
                        onClick={() => handleAddImage(image.id)}
                      >
                        تعديل
                      </EditGalleryButton>

                      {gallery.length > 1 && (
                        <DeleteButton
                          onClick={() => deleteDialogOpen(image.id)}
                        />
                      )}
                    </>
                  )}
                </SliderImage>
              </Box>
            );
          })}
        </Slide>
        <ThumbnailBox
          sx={{
            mt: '5px',
            p: '0 1%',
          }}
        >
          {gallery.map((e: StadiumGallery) => (
            <ThumbnailImage
              key={e.id}
              sx={{
                p: '0 20px',
                backgroundImage: `url(${e.image})`,
                scale: e.id === Active ? ' 1.2' : '1',
              }}
            />
          ))}
        </ThumbnailBox>
      </SliderBox>
    </Box>
  );
};

export default ImageSlider;
