import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import FeatureSection from './FeatureSection';
import { StyledTitleF } from './Features.styled';

const Feature: React.FC = (): ReactElement => {
  return (
    <Box id="servicesLink">
      <StyledTitleF>احجز, العب, شارك, شوت</StyledTitleF>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FeatureSection
          imageSrc="https://res.cloudinary.com/dtpbcx2kv/image/upload/v1691933957/tgs8tejae3iiokkgnmag.png"
          description=" كرة القدم هي رياضة شعبية ومحبوبة حول العالم. تتميز اللعبة بجماعيتها وتطلب التعاون والتنسيق بين اللاعبين وهي وسيلة للترفيه والتنافس وبناء الروح الرياضية."
        />
        <FeatureSection
          imageSrc="https://res.cloudinary.com/dtpbcx2kv/image/upload/v1691934010/wldppy9zexq4emsz4j7f.png"
          description="تعتبر الكرة القدم أيضًا رياضة ذات تاريخ طويل وتطور مستمر. تشمل البطولات العالمية مثل كأس العالم والبطولات القارية مثل دوري أبطال أوروبا و أفريقيا والعديد من الدوريات التي تجمع المشجعين واللاعبين من مختلف الثقافات والبلدان."
        />
        <FeatureSection
          imageSrc="https://res.cloudinary.com/dtpbcx2kv/image/upload/v1691934045/zqfqmeqkdmfbffxnhfi2.png"
          description="تقدم الكرة القدم فوائد صحية وبدنية. تساهم المباريات والتمارين المنتظمة في تحسين اللياقة البدنية والقوة والتحمل. تعزز الكرة القدم أيضًا التواصل والتعاون بين اللاعبين، مما يعزز الروح الجماعية والعمل الجماعي."
        />
      </Box>
    </Box>
  );
};

export default Feature;
