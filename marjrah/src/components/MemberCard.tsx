import React from 'react';
import styled from "@emotion/styled";



type MemberCard = {
    name?: string;
    img?: string;
    email?: string;
}
const MemberCardContainer = styled('div')`
    width: 300px;
    height: 350px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 200px;
        height: 200px;
    }
 `;

const MemberCard = ({name, img, email}: MemberCard) => {
    return (
        <MemberCardContainer>
            <img className="object-cover" src={img} alt="member"/>
            <h1 className="m-3">{name}</h1>
            <h2>{email}</h2>
        </MemberCardContainer>
    )
}

export default MemberCard;