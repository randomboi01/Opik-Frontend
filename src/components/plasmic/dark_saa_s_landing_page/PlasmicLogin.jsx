// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WZxc9ETCwDp4rSGaS5CbS
// Component: YidwpCLPrIIe
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Navbar2 from "../../Navbar2"; // plasmic-import: lnR5QM188Nfg/component
import Login2 from "../../Login2"; // plasmic-import: y5pZtcVsBZ6W/component
import Footer2 from "../../Footer2"; // plasmic-import: eAzPK-xaaIOB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9WZxc9ETCwDp4rSGaS5CbS/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: YidwpCLPrIIe/css

createPlasmicElementProxy;

export const PlasmicLogin__VariantProps = new Array();

export const PlasmicLogin__ArgProps = new Array();

const $$ = {};

function PlasmicLogin__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar2
            data-plasmic-name={"navbar2"}
            data-plasmic-override={overrides.navbar2}
            className={classNames("__wab_instance", sty.navbar2)}
          />

          <Login2
            data-plasmic-name={"login2"}
            data-plasmic-override={overrides.login2}
            className={classNames("__wab_instance", sty.login2)}
          />

          <Footer2
            data-plasmic-name={"footer2"}
            data-plasmic-override={overrides.footer2}
            className={classNames("__wab_instance", sty.footer2)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbar2", "login2", "footer2"],
  navbar2: ["navbar2"],
  login2: ["login2"],
  footer2: ["footer2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar2: makeNodeComponent("navbar2"),
    login2: makeNodeComponent("login2"),
    footer2: makeNodeComponent("footer2"),
    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
