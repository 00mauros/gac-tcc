import { useEffect, useState } from "react"

import logoIcon from "../../assets/icons/logoIcon.svg"
import ThreeBarsIcon from "../../assets/icons/barsIcon.png"
import CloseIcon from "../../assets/icons/closeIcon.png"
import profilePhoto from "../../assets/imgs/profile-photo.png"

import * as S from "./styles"
import api from "../../services/api"

const Header = () => {
    const [openSideBar, setOpenSideBar] = useState(true);
    const [name, setName] = useState<any>()

    const openSideBarEvent = () => {
        setOpenSideBar(!openSideBar);
        dispatchEvent(
            new CustomEvent("openSideBar", {
                detail: { openSideBar: !openSideBar },
            })
        )
    }

    useEffect(() => {
        api.get("/user").then((response) => {
            setName(response.data[0])
            sessionStorage.setItem("userId", response?.data[0]?.id)
        }).catch((error) => {
        })
    }, [])

    return (
        <S.Container>
            <S.SideBarIcon src={openSideBar ? CloseIcon : ThreeBarsIcon} alt="open-side-bar" onClick={openSideBarEvent} />
            <S.LogoBox>
                <S.LogoImg src={logoIcon} alt="logo" />
                <S.LogoText>G.A.C.</S.LogoText>
            </S.LogoBox>

            <S.UserBox>
                <S.UserName>{name?.name.split(" ")[0]}</S.UserName>
                <S.ProfilePhoto src={profilePhoto} />
            </S.UserBox>
        </S.Container>
    );
}

export default Header;