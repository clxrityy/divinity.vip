export default function adminLogin(credientials: string) {
    const correctCredientials = process.env.ADMIN_CREDENTIALS;


    let response = {
        success: null || false,
        message: "loading..."
    };
    if (credientials === correctCredientials!) {
        response.success = true;
        response.message = "Login successful!";
    } else {
        response.success = false;
        response.message = "Login failed!";
    }

    return response;
}

export function adminPath(credentials: string) {
    const correctCredientials = process.env.ADMIN_CREDENTIALS!;

    let path: string = "";

    if (credentials === correctCredientials) {
        path = credentials.substring(0, 14);
    } else {
        path = "/";
    }

    return path;
}