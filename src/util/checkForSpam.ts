const checkForSpam = (input: string, postType: "confession" | "advice" | "story"): {success: boolean, message: string} => {

    let checked: {success: boolean, message: string} = {
        success: false,
        message: "loading..."
    }

    const inputSplit = input.split(" ");

    if (postType === "confession" || postType === "advice") {
        if (inputSplit.length <= 2) {
            checked = {
                success: false,
                message: "This message might be detected as spam!"
            }
        } else {
            if (inputSplit.length <= 4 && input.length >= 22) {
                checked = {
                    success: false,
                    message: "This message might be detected as spam!"
                }
            } else {
                checked = {
                    success: true,
                    message: "Successfully posted!"
                }
            }
        }
    } else {
        if (inputSplit.length <= 5) {
            checked = {
                success: false,
                message: "This story might be spammy"
            }
        } else {
            if (inputSplit.length <= 6 && input.length >= 40) {
                checked = {
                    success: false,
                    message: "This message might be detected as spam!"
                }
            } else {
                checked = {
                    success: true,
                    message: "Successfully posted!"
                }
            }
        }
    }

    return checked;
}

export default checkForSpam;