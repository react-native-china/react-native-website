/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const CWD = process.cwd();
const siteConfig = require(CWD + "/siteConfig.js");
const versions = require(CWD + "/versions.json");

class Versions extends React.Component {
  render() {
    const releaseCandidateVersion = versions[0];
    const stableVersion = versions[1];

    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <h1>React Native 版本</h1>
          <p>
            React Native 版本发布间隔为一个月，每月我们会从master分支拆分出一个分支作为候选发布分支，
            更早版本的候选发布分支便被发布为最新稳定版。
          </p>
          <p>
            如果你有应用是基于React Native，查看发布信息来了解修复的bug和新增的功能。阅读{" "}
            <a href={siteConfig.baseUrl + "docs/upgrading.html"}>
              更新React Native应用到最新版本指南
            </a>{" "}了解更多。
          </p>
          <p>
            你可以点击下方各个版本对应的文档链接来查看特定版本React Native的文档。
            随时可以通过当前页面点击切换不同版本来了解对应信息。
          </p>
          <h2>最新版本</h2>
          <p>
            当你想要尝试新功能、了解React Native发展方向和更好地给维护者们进行反馈时，请选用最新的候选版本。
            每一个候选版本都至少已经在真实的Facebook应用中使用了两周。
          </p>
          <table className="versions">
            <tbody>
              <tr>
                <th>Master</th>
                <td>
                  <a
                    href={siteConfig.baseUrl + "docs/next/getting-started.html"}
                  >
                    文档
                  </a>
                </td>
                <td />
              </tr>
              <tr>
                <th>{releaseCandidateVersion}-RC</th>
                <td>
                  <a
                    href={
                      siteConfig.baseUrl +
                      "docs/" +
                      releaseCandidateVersion +
                      "/getting-started.html"
                    }
                  >
                    文档
                  </a>
                </td>
                <td>
                  <a
                    href={
                      "https://github.com/facebook/react-native/releases/tag/v" +
                      releaseCandidateVersion +
                      ".0-rc.0"
                    }
                  >
                    发布信息
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>稳定版本</h2>
          <p>
            当你使用 <code>react-native init</code> 初始化React Native项目时此版本会被默认采用。
            进入候选发布版本的分支会在大约一个月后被发布为稳定版本。
          </p>
          <table className="versions">
            <tbody>
              <tr>
                <th>{stableVersion}</th>
                <td>
                  <a
                    href={
                      siteConfig.baseUrl +
                      "docs/" +
                      stableVersion +
                      "/getting-started.html"
                    }
                  >
                    文档
                  </a>
                </td>
                <td>
                  <a
                    href={
                      "https://github.com/facebook/react-native/releases/tag/v" +
                      stableVersion +
                      ".0"
                    }
                  >
                    发布信息
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>过往版本</h2>
          <p>
            你可以在 GitHub 上查看 React Native 所有的过往版本。
            若想查看每个版本发布时修复的bug和新增的功能点击"发布信息"进行查看。
          </p>
          <table className="versions">
            <tbody>
              {versions.slice(1).map(function(version) {
                return (
                  <tr key={"version_" + version}>
                    <th>{version}</th>
                    <td>
                      <a
                        href={
                          siteConfig.baseUrl +
                          "docs/" +
                          version +
                          "/getting-started.html"
                        }
                      >
                        文档
                      </a>
                    </td>
                    <td>
                      <a
                        href={
                          "https://github.com/facebook/react-native/releases/tag/v" +
                          version +
                          ".0"
                        }
                      >
                        发布信息
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}

Versions.defaultProps = {
  language: "zh-CN"
};

module.exports = Versions;
