export async function uploadImage(file: File) {
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_PRESET as string;
  const cloudinaryURL = process.env.REACT_APP_CLOUDINARY_URL as string;
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', uploadPreset);

  return fetch(cloudinaryURL, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
