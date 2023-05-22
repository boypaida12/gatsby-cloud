/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/Gatsby-Logo.svg";
import BgImg from "../assets/left-yellow-arm.svg";
import FastBuildIcon from "../assets/faster-builds-icon.svg";
import ShareableIcon from "../assets/shareable-preview-icon.svg";
import GlobalEdgeIcon from "../assets/global-edge-icon.svg";
import TestingIcon from "../assets/testing-icon.svg";
import "./textStyles.css";
import TextBody from "./TextBody";

function TextComponent() {
  return (
    <>
      <img src={BgImg} alt="" className="left-background-image" />
      <div className="d-inline-flex gap-1">
        <img src={Logo} width={100} alt="Gatsby Logo" />
        <span className="align-self-end fw-bold" style={{ color: "#8A4BAF" }}>
          Cloud
        </span>
      </div>
      <h1 className="fw-bold fs-2 my-4 w-75">
        The best way to
        <span style={{ color: "#663399" }}>
          {" "}
          build, deploy & scale
          Gatsby sites
        </span>
      </h1>
      <TextBody
        imgSrc={FastBuildIcon}
        heading={"Faster Builds and Deploys"}
        paragraph={
          "Get the fastest builds and deploys on the web with infrastructure customized for Gatsby"
        }
      />
      <TextBody
        imgSrc={ShareableIcon}
        heading={"Shareable Preview Environments"}
        paragraph={
          "Easily collaborate with shareable URLs created on each pull-request or content change"
        }
      />
      <TextBody
        imgSrc={GlobalEdgeIcon}
        heading={"Global Edge Network"}
        paragraph={
          "Host your website on a performant, secure, and reliable Edge network with 33+ PoPs"
        }
      />
      <TextBody
        imgSrc={TestingIcon}
        heading={"Testing and Rollbacks"}
        paragraph={
          "Deploy each build with only the confidence of an atomic build that can be rolled back in seconds"
        }
      />
    </>
  );
}

export default TextComponent;
