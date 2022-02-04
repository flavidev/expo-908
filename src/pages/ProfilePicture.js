import React from 'react';
import { Button } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';


function ProfilePicture(props) {

    const { user, setUser } = props;

    async function handleFile(file) {
        try {
            const response = await Storage.put(user.given_name + user.name + "-picture.png", file, {
                contentType: "image/png",
                progressCallback: (progress) => {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
            });
            let url = await Storage.get(user.given_name + user.name + "-picture.png");
            setUser({ ...user, picture: url });
            console.log(response);
            console.log(user);
        }
        catch (error) {
            console.log("Error uploading file:", error);
        }
    }

    // styling upload picture button
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };




    return (
        <div className='container'>
            <>
                <Button
                    style={styles.button}
                    onClick={handleClick}>
                    Enviar foto
                </Button>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    accept='image/*'
                />
            </>

        </div>
    )
}

const styles = {
    profilePicture: {
        flex: 1,
        borderRadius: '50%',
        border: '1px solid white',
        maxHeight: '300px',
        maxWidth: '300px',
    },
    button: {
        color: "#fff",
        backgroundColor: "#000",

    }
}

export default ProfilePicture;