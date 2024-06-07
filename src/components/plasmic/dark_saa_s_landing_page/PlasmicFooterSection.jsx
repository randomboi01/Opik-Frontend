// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WZxc9ETCwDp4rSGaS5CbS
// Component: T2TwonB_OWGK
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Logo from "../../Logo"; // plasmic-import: T9gpS9Fk8hi0/component
import Button from "../../Button"; // plasmic-import: FAL88-jyCKI_/component
import { useScreenVariants as useScreenVariants_5FfeMn0I1Ziv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 5FfeMN0i1Ziv/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9WZxc9ETCwDp4rSGaS5CbS/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: T2TwonB_OWGK/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: F24m-Lv370aX/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: SQn1yuKmuqmH/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: sVTaN2ToYIzX/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: WM3c_dio4nO0/icon

createPlasmicElementProxy;

export const PlasmicFooterSection__VariantProps = new Array();

export const PlasmicFooterSection__ArgProps = new Array();

const $$ = {};

function PlasmicFooterSection__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_5FfeMn0I1Ziv()
  });
  return (
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__iBpq2)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__gwhB3)}>
            <div className={classNames(projectcss.all, sty.freeBox__ler1)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fhRwG
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod tempor"
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__awAw3)}>
                <FacebooksvgIcon
                  className={classNames(projectcss.all, sty.svg__bVw4F)}
                  role={"img"}
                />

                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg__vpzhz)}
                  role={"img"}
                />

                <InstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg__hpEKc)}
                  role={"img"}
                />

                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg___0RGwl)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__fDksu)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__uLrwK
              )}
            >
              {"Menu"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__b6KHg)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qMtb)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jycxJ)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___821Fp
                )}
              >
                {"Product"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___0X9Kq)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___9QH3)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__w7I3)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___47UTo
                )}
              >
                {"Purchase"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___04Djg)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__pbu4Y)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__gej)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fCapa
                )}
              >
                {"How it Work"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__rgBSh)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hPzd)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__r08Xx)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__enH6Q
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__mh3M6)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__eqzRk
              )}
            >
              {"Help"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__harD)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__fw6Pt)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__vjJwl)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n4Xdd
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__wSKdv)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__etJrN)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__o8Unz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__chFvU
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__hOuj)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__vhUy3
              )}
            >
              {"Company"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__niI9H)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mXx6V)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rcnOa)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xjzH5
                )}
              >
                {"Our Team"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__xCxda)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qxUj1)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__e4S37)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oqcbY
                )}
              >
                {"Partner with us"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___7M1Ml)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___1CRrh)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qgYpR)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qkKXd
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__zfach)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mQy6P
          )}
        >
          {"Copyrights \u00a9 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
