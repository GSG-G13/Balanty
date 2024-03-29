import React, { useState } from 'react';
import { TextField, InputAdornment, Box, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@emotion/react';
import { customPalette } from '../../interfaces';

interface TypeSearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const TypeSearch: React.FC<TypeSearchProps> = ({
  searchValue,
  setSearchValue,
}) => {
  const currentTheme = useTheme();

  const [showClearIcon, setShowClearIcon] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowClearIcon(true);
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setShowClearIcon(false);
    setSearchValue('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 'calc(100% - 700px)',
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          value={searchValue}
          onChange={handleChange}
          placeholder="بحث"
          sx={{
            borderColor: '#2CB674',
            marginTop: '80px',
            backgroundColor: ((currentTheme as Theme).palette as customPalette)
              .customColors.grayColor,
            border: `1px solid ${
              ((currentTheme as Theme).palette as customPalette).customColors
                .grayColor
            }`,
            borderRadius: '4px',
            width: '100%',
            '& input': {
              color: (currentTheme as Theme).palette.primary.contrastText,
              textAlign: 'right',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: (currentTheme as Theme).palette.primary.contrastText,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: showClearIcon && (
              <InputAdornment
                position="end"
                onClick={handleClear}
                style={{ cursor: 'pointer' }}
              >
                <ClearIcon style={{ color: '#999' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default TypeSearch;
