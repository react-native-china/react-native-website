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
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + "/siteConfig.js");

const pinnedApps = siteConfig.users.filter(app => {
  return app.pinned;
});

class Button extends React.Component {
  render() {
    return (
      <a
        className="big-button"
        href={this.props.href}
        target={this.props.target}
      >
        {this.props.children}
      </a>
    );
  }
}

class HomeCallToAction extends React.Component {
  render() {
    return (
      <div>
        <Button
          href={siteConfig.baseUrl + "docs/getting-started.html"}
          target="_self"
        >
          起步
        </Button>
        <Button href={siteConfig.baseUrl + "docs/tutorial.html"} target="_self">
          学习基础
        </Button>
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return <div className="hero">{this.props.children}</div>;
  }
}

class HeaderHero extends React.Component {
  render() {
    return (
      <Hero>
        <div className="text">React Native</div>
        <div className="minitext">
          使用 JavaScript 和 React 技术开发原生应用
        </div>
        <div className="buttons-unit">
          <HomeCallToAction />
        </div>
      </Hero>
    );
  }
}

class AppList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._renderApp = this._renderApp.bind(this);
  }

  render() {
    return <div>{this.props.apps.map(this._renderApp)}</div>;
  }

  _renderApp(app, i) {
    return (
      <div className="showcase" key={i}>
        <a href={app.infoLink}>{this._renderAppIcon(app)}</a>
      </div>
    );
  }

  _renderAppIcon(app) {
    let imgSource = app.icon;
    if (!app.icon.startsWith("http")) {
      imgSource = siteConfig.baseUrl + "img/showcase/" + app.icon;
    }
    return <img src={imgSource} alt={app.name} />;
  }
}

class Features extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>使用 JavaScript 和 React 技术开发原生应用</h2>
              <MarkdownBlock>
                React Native帮助你使用JavaScript技术开发原生应用。
                它使用与React一致的设计, 使得你可以使用富有表现力的组件搭建起有复杂用户界面的原生应用。
              </MarkdownBlock>
            </div>
            <MarkdownBlock>
              {`\`\`\`javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          如果你喜欢 React, 那你也会喜欢React Native。
        </Text>
        <Text>
          与web端使用'div' 和 'span'书写用户界面不同，
          你需要使用 'View' and 'Text' 来书写原生组件。
        </Text>
      </View>
    );
  }
}
\`\`\``}
            </MarkdownBlock>
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>一个React Native应用是一个真实的原生应用</h2>
              <MarkdownBlock>
                使用React Native进行软件开发时，你并非在书写一个“移动端网页应用”， 或是 “HTML5
                应用”， 亦或是“混合应用”。 你书写的应用与使用Objective-C、Java书写的并没有区别。
                React Native使用同常规iOS、Android应用一致的基础用户界面布局模块，
                你所做的仅仅是通过Javascript和React将他们整合起来。
              </MarkdownBlock>
            </div>
            <MarkdownBlock>
              {`\`\`\`javascript
import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

class AwkwardScrollingImageWithText extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height:180}}
        />
        <Text>
          在iOS平台， 一个React Native的ScrollView使用的是原生的 UIScrollView 模块。
          在Android平台, 使用的是原生的 ScrollView 模块。

          在iOS平台, 一个React Native的Image组件使用的是原生的 UIImageView 模块。
          在Android平台， 使用的是原生 ImageView 模块。

          React Native将原生的基础模块包装起来, 让你通过与React同样洁净的开发方式，书写
          与原生应用性能相当的应用程序。
        </Text>
      </ScrollView>
    );
  }
}
\`\`\`
`}
            </MarkdownBlock>
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>不要把时间浪费在编译代码上</h2>
              <div>
                <MarkdownBlock>
                  React Native使得应用开发更迅速。 你可以即时地刷新你的应用而不用等待重新编译。
                  [热刷新](http://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html)
                  技术使得你可以在不重新编译app的情况下运行新代码。
                  尝试一下这个神奇的功能，你会喜欢他的。
                </MarkdownBlock>
              </div>
            </div>
            <img src="https://media.giphy.com/media/13WZniThXy0hSE/giphy.gif" />
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>当你需要使用原生代码时尽管使用</h2>
              <div>
                <MarkdownBlock>
                  React Native可以无痛地与Objective-C, Java, 或Swift书写的原生应用进行集成。 
                  你可以相当简单地书写原生代码来优化应用的某些方面。
                  如果你想在应用的一部分使用React Native而另一部分使用原生代码也相当简单，Facebook的应用便是使用这种设计。
                </MarkdownBlock>
              </div>
            </div>
            <MarkdownBlock>
              {`
\`\`\`javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TheGreatestComponentInTheWorld } from './your-native-code';

class SomethingFast extends Component {
  render() {
    return (
      <View>
        <TheGreatestComponentInTheWorld />
        <Text>
          TheGreatestComponentInTheWorld是使用Objective-C,
          Java, 或者 Swift 书写的原生模块，使用方式与其他的模块并无二致。
        </Text>
      </View>
    );
  }
}
\`\`\`
`}
            </MarkdownBlock>
          </div>
        </Container>
      </div>
    );
  }
}

class MiniShowcase extends React.Component {
  render() {
    return (
      <div className="home-showcase-section">
        <h2>谁在使用React Native？</h2>
        <p>
          目前使用React Native技术的应用多达上千, 从世界500强到创业公司都有使用者。对使用React Native最终实现的应用感兴趣可以
          {" "}
          <a href={siteConfig.baseUrl + "showcase.html"}>
            浏览这些应用
          </a>！
        </p>
        <div className="logos">
          <AppList apps={pinnedApps} />
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <HeaderHero />
        <Features />
        <MiniShowcase />
        <Hero>
          <HomeCallToAction />
        </Hero>
      </div>
    );
  }
}

module.exports = Index;
