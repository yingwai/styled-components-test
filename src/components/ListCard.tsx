import styled, { css } from "styled-components"

export function ListCard(props: any) {
    return <List>
        <Card color="#fff">
            <div className="img"></div>
            <h3>Headline</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>

            <div>
                <CardBtn type="submit" value="See more" fill />
                <CardBtn type="submit" value="Save" />
            </div>
        </Card>
        <Card color="#8af193">
            <div className="img"></div>
            <h3>Headline</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>

            <div>
                <CardBtn type="submit" value="See more" fill />
                <CardBtn type="submit" value="Save" />
            </div>
        </Card>
        <Card color="#e0f18a">
            <div className="img"></div>
            <h3>Headline</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>

            <div>
                <CardBtn type="submit" value="See more" />
                <CardBtn type="submit" value="Save" fill />
            </div>
        </Card>
        <Card color="#ec4c4c">
            <div className="img"></div>
            <h3>Headline</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>

            <div>
                <CardBtn type="submit" value="See more" />
                <CardBtn type="submit" value="Save" fill />
            </div>
        </Card>
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
const Card = styled.div`
    width: 300px;
    min-height: 350px;
    padding: 10px;

    border-radius: 15px;
    background: ${props => props.color || '#fff'};
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    .img {
        width: 100%;
        height: 170px;

        background: #000;
        border-radius: 10px;
    }

    h3 {
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

    div {
        display: flex;
        gap: 12px;
    }

    h3, p, div:last-child {
        margin-left: 10px;
    }
`

type CardBtnPropsType = {
    fill?: boolean,
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

    ${props => props.fill && css<CardBtnPropsType>`
        background: #4E71FE;
        color: #fff;
    `}
`