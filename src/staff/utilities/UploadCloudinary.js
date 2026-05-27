export const uploadCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "thang_preset");

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dhsdp50cy/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await res.json();
    console.log(data.secure_url)
    return data.secure_url;
};