import React from "react";
import HelpBlock from "./../components/Help/HelpBlock/HelpBlock";
import { FaQuestion, FaBook, FaCommentAlt } from "react-icons/fa";
import ContactForm from "./../components/Help/ContactForm/ContactForm";
import FAQ from "../components/Help/FAQ/FAQ";

const HelpPage = () => {
  return (
    <div className="help-wrapper">
      <div className="help-box">
        <div className="icons">
          <FaBook size="3rem" />
        </div>
        <HelpBlock
          title="Terms"
          description="Our Terms and Conditions policy"
          buttonText="Read"
          buttonClass="btn btn-form"
        >
        </HelpBlock>
      </div>
      <div className="help-box">
        <div className="icons">
          <FaQuestion size="3rem" />
        </div>
        <HelpBlock
          title="FAQ"
          description="Frequently Asked Questions"
          buttonText="Take a Look"
          buttonClass="btn btn-form"
          modalWidth="80%"
          modalLeft="50%"
        >
          <FAQ />
        </HelpBlock>
      </div>
      <div className="help-box">
        <div className="icons">
          <FaCommentAlt size="3rem" />
        </div>
        <HelpBlock
          title="Contact Us"
          description="Any doubts or questions?"
          buttonText="Ask Away"
          buttonClass="btn btn-form"
          modalWidth="80%"
          modalLeft="50%"
        >
          <ContactForm />
        </HelpBlock>
      </div>
    </div>
  );
};

export default HelpPage;
