// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WZxc9ETCwDp4rSGaS5CbS
// Component: -xhtwJ01Jwou
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { RichList } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-list";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9WZxc9ETCwDp4rSGaS5CbS/projectcss
import sty from "./PlasmicHospital1.module.css"; // plasmic-import: -xhtwJ01Jwou/css

createPlasmicElementProxy;

export const PlasmicHospital1__VariantProps = new Array();

export const PlasmicHospital1__ArgProps = new Array();

const $$ = {};

function PlasmicHospital1__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <RichList
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      bordered={true}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      type={"grid"}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHospital1__ArgProps,
          internalVariantPropNames: PlasmicHospital1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHospital1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHospital1";
  } else {
    func.displayName = `PlasmicHospital1.${nodeName}`;
  }
  return func;
}

export const PlasmicHospital1 = Object.assign(
  // Top-level PlasmicHospital1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHospital1
    internalVariantProps: PlasmicHospital1__VariantProps,
    internalArgProps: PlasmicHospital1__ArgProps
  }
);

export default PlasmicHospital1;
/* prettier-ignore-end */
