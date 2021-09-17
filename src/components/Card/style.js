import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    gap: 5px;

    :root {
        --unknown: gray;
        --Alive: green;
        --Dead: red;
    }

    div, h4, p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .card_content {
        padding: 20px;
        max-width: 180px;
        box-shadow: 0 0 3px 0px #9c9c9c;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 4px;
        background:white;
        font-family: sans-serif;
    }

    .statusIndicator{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        box-shadow: 0 0 4px 1px #292929;

    }

    .unknown {
        background:#dcdcdc;
    }

    .Alive {
        background:#00fb00;
    }

    .Dead {
        background: #ff0000;
    }

    img {
        width: auto;
        height: 140px;
        border-radius: 50%;
    }

    h4 {
        word-break: break-all;
        max-width: 150px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

`