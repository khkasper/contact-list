import * as sinon from "sinon";
import chai from "chai";

import server from "../server";

import ContactModel from "../app/models/Contact";

import * as contactMock from "./mocks";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);

const {expect} = chai;

const app = server.getApp();
const contactModel = new ContactModel();

describe("Contact Controller", () => {
  describe("POST /contacts", () => {
    describe("when there is an unexpected error", () => {
      before(async () => {
        sinon.stub(contactModel.model, "create").throws();
      });

      after(() => {
        (contactModel.model.create as sinon.SinonStub).restore();
      });

      it("should return a 500 error", async () => {
        const res = await chai
          .request(app)
          .post("/contacts")
          .send(contactMock.validContact);
        expect(res.status).to.be.equal(500);
      });

      it("should return a message with the error", async () => {
        const res = await chai
          .request(app)
          .post("/contacts")
          .send(contactMock.validContact);
        console.log(res.body.error);
        expect(res.body.error).to.be.equal("Internal Server Error");
      });
    });

    describe("when the request is invalid", () => {
      describe("when the field `name` is missing", () => {
        it("should return a 400 error", async () => {
          const res = await chai
            .request(app)
            .post("/contacts")
            .send(contactMock.noNameContact);
          expect(res.status).to.be.equal(400);
        });
      });

      describe("when the field `mobile` is missing", () => {
        it("should return a 400 error", async () => {
          const res = await chai
            .request(app)
            .post("/contacts")
            .send(contactMock.noMobileContact);
          expect(res.status).to.be.equal(400);
        });
      });

      describe("when the field `email` is missing", () => {
        it("should return a 400 error", async () => {
          const res = await chai
            .request(app)
            .post("/contacts")
            .send(contactMock.noEmailContact);
          expect(res.status).to.be.equal(400);
        });
      });

      describe("when the field `url` is missing", () => {
        it("should return a 400 error", async () => {
          const res = await chai
            .request(app)
            .post("/contacts")
            .send(contactMock.noUrlContact);
          expect(res.status).to.be.equal(400);
        });
      });

      describe("when the request is valid", () => {
        before(async () => {
          sinon.stub(contactModel.model, "create").resolves(contactMock.validContact);
        });

        after(() => {
          (contactModel.model.create as sinon.SinonStub).restore();
        });

        it("should return a valid contactr", async () => {
          const res = await chai
            .request(app)
            .post("/contacts")
            .send(contactMock.validContact);
          expect(res.status).to.be.equal(201);
          expect(res.body).to.be.deep.equal(contactMock.validContact);
        });
      });
    });

    describe("GET /contacts", () => {
      describe("when there is an unexpected error", () => {
        before(async () => {
          sinon.stub(contactModel.model, "find").throws();
        });

        after(() => {
          (contactModel.model.find as sinon.SinonStub).restore();
        });

        it("should return a 500 error", async () => {
          const res = await chai.request(app).get("/contacts");
          expect(res.status).to.be.equal(500);
        });

        it("should return a message with the error", async () => {
          const res = await chai.request(app).get("/contacts");
          expect(res.body.error).to.be.equal("Internal Server Error");
        });
      });

      describe("when there is no contacts", () => {
        before(async () => {
          sinon.stub(contactModel.model, "find").resolves([]);
        });

        after(() => {
          (contactModel.model.find as sinon.SinonStub).restore();
        });

        it("should return a list of contacts", async () => {
          const res = await chai.request(app).get("/contacts");
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.deep.equal([]);
        });
      });
    });

    describe("PUT /contacts/:id", () => {
      describe("when there is an unexpected error", () => {
        before(async () => {
          sinon.stub(contactModel.model, "findOneAndUpdate").throws();
        });

        after(() => {
          (contactModel.model.findOneAndUpdate as sinon.SinonStub).restore();
        });

        it("should return a 500 error", async () => {
          const res = await chai
            .request(app)
            .put(`/contacts/${contactMock.validContact._id}`)
            .send(contactMock.validContact);
          expect(res.status).to.be.equal(500);
        });

        it("should return a message with the error", async () => {
          const res = await chai
            .request(app)
            .put(`/contacts/${contactMock.validContact._id}`)
            .send(contactMock.validContact);
          expect(res.body.error).to.be.equal("Internal Server Error");
        });
      });

      describe("when id is invalid", () => {
        it("should return a 400 error", async () => {
          const res = await chai.request(app).put("/contacts/invalid-id");
          expect(res.status).to.be.equal(400);
        });

        it("should return a message with the error", async () => {
          const res = await chai.request(app).put("/contacts/invalid-id");
          expect(res.body.error).to.be.equal(
            "Id must have 24 hexadecimal characters",
          );
        });
      });

      describe("when the contact does not exist", () => {
        before(async () => {
          sinon.stub(contactModel.model, "findOneAndUpdate").resolves(null);
        });

        after(() => {
          (contactModel.model.findOneAndUpdate as sinon.SinonStub).restore();
        });

        it("should return a 404 error", async () => {
          const res = await chai
            .request(app)
            .put(`/contacts/${contactMock.validContact._id}`)
            .send(contactMock.updatedContact);
          expect(res.status).to.be.equal(404);
        });
      });

      describe("when the contact exists", () => {
        before(async () => {
          sinon
            .stub(contactModel.model, "findOneAndUpdate")
            .resolves(contactMock.updatedContact as any);
        });

        after(() => {
          (contactModel.model.findOneAndUpdate as sinon.SinonStub).restore();
        });

        describe("when the request is valid", () => {
          it("should return a valid contact", async () => {
            const res = await chai
              .request(app)
              .put(`/contacts/${contactMock.validContact._id}`)
              .send(contactMock.updatedContact);
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(contactMock.updatedContact);
          });
        });
      });
    });

    describe("DELETE /contacts/:id", () => {
      describe("when there is an unexpected error", () => {
        before(async () => {
          sinon.stub(contactModel.model, "findOneAndDelete").throws();
        });

        after(() => {
          (contactModel.model.findOneAndDelete as sinon.SinonStub).restore();
        });

        it("should return a 500 error", async () => {
          const res = await chai
            .request(app)
            .delete(`/contacts/${contactMock.validContact._id}`);
          expect(res.status).to.be.equal(500);
        });

        it("should return a message with the error", async () => {
          const res = await chai
            .request(app)
            .delete(`/contacts/${contactMock.validContact._id}`);
          expect(res.body.error).to.be.equal("Internal Server Error");
        });
      });

      describe("when the contact does not exist", () => {
        before(async () => {
          sinon.stub(contactModel.model, "findOneAndDelete").resolves(null);
        });

        after(() => {
          (contactModel.model.findOneAndDelete as sinon.SinonStub).restore();
        });

        it("should return a 404 error", async () => {
          const res = await chai
            .request(app)
            .delete(`/contacts/${contactMock.validContact._id}`);
          expect(res.status).to.be.equal(404);
        });
      });

      describe("when the contact exists", () => {
        before(async () => {
          sinon
            .stub(contactModel.model, "findOneAndDelete")
            .resolves(contactMock.validContact as any);
        });

        after(() => {
          (contactModel.model.findOneAndDelete as sinon.SinonStub).restore();
        });

        it("should return status 204", async () => {
          const res = await chai
            .request(app)
            .delete(`/contacts/${contactMock.validContact._id}`);
          expect(res.status).to.be.equal(204);
        });
      });
    });
  });
});
