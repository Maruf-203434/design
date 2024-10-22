import * as adobeXd from "/public/svg/skills/adobe-xd.svg";
import adobeaudition from "/public/svg/skills/adobeaudition.svg";
import afterEffects from "/public/svg/skills/after-effects.svg";
import angular from "/public/svg/skills/angular.svg";
import css from "/public/svg/skills/css.svg";
import canva from "/public/svg/skills/canva.svg";
import docker from "/public/svg/skills/docker.svg";
import mongodb from "/public/svg/skills/mongoDB.svg";
import figma from "/public/svg/skills/figma.svg";
import firebase from "/public/svg/skills/firebase.svg";
import flutter from "/public/svg/skills/flutter.svg";
import aws from "/public/svg/skills/aws.svg";
import wordpress from "/public/svg/skills/wordpress.svg";
import git from "/public/svg/skills/git.svg";
import go from "/public/svg/skills/go.svg";
import html from "/public/svg/skills/html.svg";
import illustrator from "/public/svg/skills/illustrator.svg";
import iconic from "/public/svg/skills/ionic.svg";
import photoshop from "/public/svg/skills/photoshop.svg";
import Javascript from "/public/svg/skills/javascript.svg";
import nextjs from "/public/svg/skills/nextJS.svg";
import reactjs from "/public/svg/skills/react.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "iconic":
      return iconic;
    case "html":
      return html;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;

    case "angular":
      return angular;

    case "javascript":
      return Javascript;

    case "docker":
      return docker;
    case "next js":
      return nextjs;

    case "react":
      return reactjs;

    case "git":
      return git;

    case "adobe audition":
      return adobeaudition;
    case "photoshop":
      return photoshop;

    case "flutter":
      return flutter;

    case "wordpress":
      return wordpress;

    case "go":
      return go;
    case "canva":
      return canva;

    case "aws":
      return aws;

    case "firebase":
      return firebase;
    case "mongodb":
      return mongodb;
    case "figma":
      return figma;
  }
};
