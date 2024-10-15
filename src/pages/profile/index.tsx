import { useEffect, useState } from "react";
import profilePhoto from "../../assets/imgs/profile-photo.png"
import * as S from "./styles.ts"
import api from "../../services/api.ts";

const Profile = () => {
    const [profile, setProfile] = useState<any>()
    useEffect(() => {
        api.get("/user").then((response) => {
            setProfile(response.data[0])
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <S.Content>
           
            <S.ProfileImg src={profilePhoto}  alt="profile-photo"/>
            <S.UserInfos>
                <p><b>Nome: </b>{profile?.name} </p>    
                {/* <p><b>Curso: </b> Sistemas de Informação</p>    
                <p><b>Matrícula: </b> 4002-8922</p>     */}
                <p><b>E-mail: </b> {profile?.email}</p>    
            </S.UserInfos>
        </S.Content>
    );
}

export default Profile;