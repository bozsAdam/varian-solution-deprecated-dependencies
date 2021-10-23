export const parseTreatmentType = (treatmentEnum) => {
  switch (treatmentEnum) {
    case 'RADIATION_THERAPY':
      return 'Radiation Therapy';
    case 'CHEMOTHERAPY':
      return 'Chemotherapy';
    case 'SURGICAL':
      return 'Surgical';
    default:
      return 'N/A';
  }
}

export const parseB64Image = (b64ImageSource) => {
  const image = new Image();
  image.src = b64ImageSource;
  return image;
}