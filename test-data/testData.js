
export function generateUniqueEmail() {
    const timestamp = Date.now();

    return `tanny${timestamp}@gmail.com`;
}

export function getRegistrationData() {
    return {
        firstName: "Tanny",
        lastName: "Rajbangshi",
        email: generateUniqueEmail(),
        password: "Test@12345"
    };
}
