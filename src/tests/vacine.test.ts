import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { Response } from 'superagent';
import 'mocha';
import app from '../index';
import { request } from 'chai';
import { vacine } from './mockData'

const expect = chai.expect;

var agent = request.agent(app);


describe('Test Vacines', () => {

    it('Should get vacine summary if query params match', async () => {
        const res: Response = await agent.get(`/vacine-summary?c=AT&dateFrom=2020-W10&dateTo=2020-W53&range=5`);
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.summary).to.be.a('array');
        expect(res.body.summary[0]).to.haveOwnProperty('_id');
        expect(res.body.summary[0]).to.haveOwnProperty('NumberDosesReceived');
        expect(res.body.summary[0]).to.haveOwnProperty('weekStart');
        expect(res.body.summary[0]).to.haveOwnProperty('weekEnd');
    });


    it('Should return an empty array if query params does not match', async () => {
        const res: Response = await agent.get(`/vacine-summary?c=AT&dateFrom=2017-W00&dateTo=2018-W02&range=5`);
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.summary).to.be.a('array');
    });

})