const env = {
    appwrite:{
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITER_HOST_URL),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITER_PROJECT_ID),
        apikey: String(process.env.NEXT_PUBLIC_APPWRITER_API_KEY)
    }
}
export default env