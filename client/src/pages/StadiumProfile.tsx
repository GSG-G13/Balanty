import { ReactElement, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import { Box } from '@mui/material';

import {
  BioSection,
  ImageSlider,
  ProfileCalender,
} from '../components/stadiumProfile';

import { UserData, errorI } from '../interfaces';
import { StadiumGallery } from '../interfaces/StadiumProfile';
import { AuthContext, UpdateGalleryContext } from '../context';

const StadiumProfile = (): ReactElement => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editGallery, setEditGallery] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [gallery, setGallery] = useState<StadiumGallery[]>([
    {
      id: 0,
      image: '',
      StadiumId: 0,
    },
  ]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [EditAble, setEditAble] = useState(
    user ? ((+user.id === +(id as string)) as boolean) : false,
  );

  const { Agree } = useContext(UpdateGalleryContext);

  const navigate = useNavigate();

  const fetchProfileData = async (userId: string) => {
    try {
      setGallery([]);

      const { data } = await axios.get(`/api/v1/stadiums/profile/${userId}`);

      setGallery(data.data.Stadium.stadiumGallery);
      setUserData(data.data as UserData);
    } catch (error) {
      if ((error as errorI).response?.status === 401) {
        navigate('/pageNotFound');
      } else {
        navigate('/serverError');
      }
    }
  };

  useEffect(() => {
    fetchProfileData(id ?? '');
  }, [id, editMode, Agree]);

  useEffect(() => {
    setEditAble(user ? ((+user.id === +(id as string)) as boolean) : false);
  }, [id]);

  return (
    <Box>
      {gallery.length && (
        <ImageSlider
          editGallery={editGallery}
          setEditGallery={setEditGallery}
          gallery={gallery}
          deleteDialog={deleteDialog}
          setDeleteDialog={setDeleteDialog}
          EditAble={EditAble}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'calc(100% - 310px)',
          height: '480px',
          gap: '30px',
          m: '23% 3% 3% 3%',
        }}
      >
        {userData && (
          <BioSection
            setEditMode={setEditMode}
            editMode={editMode}
            userData={userData}
            EditAble={EditAble}
          />
        )}
        <ProfileCalender />
      </Box>
    </Box>
  );
};

export default StadiumProfile;
