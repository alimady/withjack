import { Container as ContainerComponent } from "react-bootstrap"
import {Row as RowComponent} from "react-bootstrap"
import {Col as ColComponent} from "react-bootstrap"
import styled from "styled-components"
import { Button as btn} from "@mui/material";

export const Button=styled(btn)`
position:relative;
margin-top:40px !important;
align-self:center;
 `
export const Row = styled(RowComponent)`
 justify-content:center;
`

export const Col = styled(ColComponent)`
 position:absolute;
 background:white;
 display:flex;
 justify-content:center;
 top:30%;
 border-radius:5px;
 padding:20px; 
 flex-direction:column;
`
export const Avatar=styled.div`
 width:120px;
 margin:auto;
border-radius:50%;
align-self:center !important;
display:flex;
align-items:center;
justify-content:center;
overflow: hidden;

 `

export const Container = styled(ContainerComponent)`
margin:80px auto 0 auto;

`