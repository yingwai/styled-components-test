import styled, { css } from "styled-components"

type CardTypeProps = {
    cardColor: string,
    title: string,
    description: string,
    img: string
}

export default function Card(props: CardTypeProps) {
    return (
        <BoxCard color={props.cardColor}>
            <div className="card-top">
                <img src={props.img} alt="CardImg" />

                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>

            <div className="btn-list">
                <CardBtn type="submit" value="See more" $fill />
                <CardBtn type="submit" value="Save" />
            </div>
        </BoxCard>
    )
}

const BoxCard = styled.div`
    width: 300px;
    min-height: 350px;
    padding: 10px;
    box-sizing: border-box;

    border-radius: 15px;
    background: ${props => props.color || '#fff'};
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    .card-top {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    img {
        width: 100%;
        height: 170px;

        border-radius: 10px;
    }

    h1 {
        margin: 0;
        color: #000;
        font-family: Inter;
        font-size: 21px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        margin: 0;
        color: #ABB3BA;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 166.667% */
    }

    .btn-list {
        display: flex;
        gap: 12px;
    }

    h1, p, div:last-child {
        margin: 0 10px;
    }
`

type CardBtnPropsType = {
    $fill?: boolean,
}

const CardBtn = styled.input<CardBtnPropsType>`
    width: 86px;
    height: 30px;

    border-radius: 5px;
    border: 2px solid #4E71FE;
    background: transparent;
    color: #4E71FE;

    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 200% */

    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        border: 2px solid #4e9afe;
        background: #4e9afe;
        color: #fff;
    }

    ${props => props.$fill && css<CardBtnPropsType>`
        background: #4E71FE;
        color: #fff;
    `}
`