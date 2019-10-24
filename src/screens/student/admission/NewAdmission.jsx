import React, { Component } from 'react'
import Layout from '../../../layout/Layout'
import Heading3 from '../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'



import Input from '../../../components/inputs/Input';
import Label from '../../../components/typography/Label';
import FormContainer from '../../../components/containers/FormContainer';
import FlatInput from '../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../components/containers/FormColumn';
import PrimaryButton from '../../../components/button/PrimaryButton';
import { PlaceholderInput, FLabel } from '../../../components/inputs/PlaceholderInput';
import Step1 from './admissionsteps/Step1';

export default class NewAdmission extends Component {
    render() {
        return (
            <div>
                <Heading3 style={{ textAlign: "center", marginTop: "-1em" }}>New Admission</Heading3>
                <Step1></Step1>
            </div>
        )
    }
}