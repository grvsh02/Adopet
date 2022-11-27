import React from 'react';
import styled from "@emotion/styled";



type MemberCard = {
    name?: string;
    img?: string;
    email?: string;
}
const MemberCardContainer = styled('div')`
    width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgb(255,76,104), 0 2px 4px -2px rgb(255,76,104);
    margin: 10px;
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
            <img src={img} alt="member"/>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </MemberCardContainer>
    )
}

export default MemberCard;