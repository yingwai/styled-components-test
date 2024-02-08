import styled from "styled-components"
import CardImg from "../assets/CardImg.png";
import Card from "./Card";

export function ListCard(props: any) {
    return <List>
        <Card cardColor="#fff" title="Headline" description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen." img={CardImg}></Card>
        <Card cardColor="#8af193" title="Test Card 1" description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen." img={CardImg}></Card>
        <Card cardColor="#e0f18a" title="Lorem Card 2" description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen." img={CardImg}></Card>
        <Card cardColor="#ec4c4c" title="Card Number 4" description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen." img={CardImg}></Card>
    </List>
}

const List = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
`