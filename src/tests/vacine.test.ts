import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import 'mocha';
import app from '../index';
import { request } from 'chai';
import { vacine } from './mockData';

const expect = chai.expect;

var agent = request.agent(app);


describe('Test Vacines', () => {

    it('Should create a vacine successfully', async () => {
        const res: Response = await agent.post(`/v1/vacine`).send(vacine[0]);
        expect(res).to.have.status(201);
        expect(res).to.be.a('object');
        expect(res.body.data).to.haveOwnProperty('_id');
        expect(res.body.data).to.haveOwnProperty('YearWeekISO');
        expect(res.body.data).to.haveOwnProperty('FirstDose');
        expect(res.body.data).to.haveOwnProperty('FirstDoseRefused');
        expect(res.body.data).to.haveOwnProperty('SecondDose');
        expect(res.body.data).to.haveOwnProperty('DoseAdditional1');
        expect(res.body.data).to.haveOwnProperty('DoseAdditional2');
        expect(res.body.data).to.haveOwnProperty('UnknownDose');
        expect(res.body.data).to.haveOwnProperty('NumberDosesReceived');
        expect(res.body.data).to.haveOwnProperty('NumberDosesExported');
        expect(res.body.data).to.haveOwnProperty('Region');
        expect(res.body.data).to.haveOwnProperty('Population');
        expect(res.body.data).to.haveOwnProperty('ReportingCountry');
        expect(res.body.data).to.haveOwnProperty('TargetGroup');
        expect(res.body.data).to.haveOwnProperty('Vaccine');
        expect(res.body.data).to.haveOwnProperty('Denominator');
    });


    it('Should get vacine summary', async () => {
        const res: Response = await agent.get(`/v1/vacine-summary`);
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.data).to.be.a('object');
        expect(res.body.data.vacines).to.be.a('array');
        expect(res.body.data.vacines[0]).to.haveOwnProperty('_id');
    });
    
})