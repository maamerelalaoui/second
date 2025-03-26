const formatFilePath = (filePath:string) => {
    return import.meta.env.VITE_API_BACKEND_URL+""+filePath.replace(/\\/g, '/');
}

export default formatFilePath;