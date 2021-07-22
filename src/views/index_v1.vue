<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        <blockquote class="text-warning" style="font-size: 14px">
          访问民商数字科技官网
          <br />
          <el-link
            href="https://www.msyidai.com"
            type="primary"
            target="_blank"
            >https://www.msyidai.com</el-link
          >
          <br />
          访问民商易贷官网
          <br />
          <el-link
            href="https://www.msyidai.com"
            type="primary"
            target="_blank"
            >https://www.msyidai.com</el-link
          >
          <br />
          下载助粒贷app
          <el-link href="https://www.msyidai.com" type="primary" target="_blank"
            >>☛☛点我进入☚☚</el-link
          >
          &nbsp;&nbsp;&nbsp; 助粒贷申请认证
          <el-link href="https://www.msyidai.com" type="primary" target="_blank"
            >>☛☛点我进入☚☚</el-link
          ><br />
          <h4 class="text-danger">
            申请门槛十分的低，基本上只要使用自己的身份证就可以申请，查询到用户目前的借款情况，信用情况等，信用越好，那么能够获得的额度越大。
          </h4>
        </blockquote>

        <hr />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>民商数据后台管理系统</h2>
        <p>
          民生易贷是民生电商旗下的产业数字化整体解决方案提供商。公司业务集企业数字化咨询、技术实施、IT系统运维为一体。以科技赋能实体经济，一方面服务民生电商业务下沉的垂直产业及民生消费领域，开发数字化科技平台，实现相关生产资料的数字化，包括生产、流通、交易等环节；一方面将积累的科技能力开放、输出外部机构，为传统行业线上化转型提供综合一体化科技服务，推动数字化转型。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <!-- <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p> -->
        <p>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-cloudy"
            plain
            @click="goTarget('https://www.msyidai.com')"
            >访问官网</el-button
          >
          <el-button
            size="mini"
            icon="el-icon-s-home"
            plain
            @click="goTarget('https://www.msyidai.com')"
            >访问百科</el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>企业详情</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h4>民生易贷(珠海)互联网金融信息服务有限公司</h4>
            <ul>
              <li>电话： 0756-8659606</li>
              <li>邮箱：msjrgszl@msok.com</li>
              <li>地址：珠海市横琴新区宝华路6号105室-20664</li>
              <li>官网：www.msyidai.com</li>
              <li>成立日期：2014-07-01</li>
              <li>统一社会信用代码：91440400398502974U</li>
              <li>...</li>
            </ul>
          </el-col>
          <!-- <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col> -->
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>联系信息</span>
          </div>
          <div class="body">
            <p>
              <i class="el-icon-s-promotion"></i> 官网：<el-link
                href="https://www.msyidai.com"
                target="_blank"
                >https://www.msyidai.com</el-link
              >
            </p>
            <!-- <p>
              <i class="el-icon-user-solid"></i> QQ群：<s>满937441</s>
              <s>满887144332</s> <s>满180251782</s> <s>满104180207</s>
              <s>满186866453</s>
              <a href="https://jq.qq.com/?_wv=1027&k=5vYAqA05" target="_blank">
                201396349</a
              >
            </p> -->
            <p>
              <i class="el-icon-chat-dot-round"></i> 微信：<a
                href="javascript:;"
                >/ *民商数据</a
              >
            </p>
            <p>
              <i class="el-icon-money"></i> 支付宝：<a
                href="javascript:;"
                class="支付宝信息"
                >/ *民商数据</a
              >
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>更新日志</span>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v1.0.1 - 2021-07-08">
              <ol>
                <li>设置前端页面风格</li>
                <li>调整字段名称</li>
                <li>修改首页内容</li>
              </ol>
            </el-collapse-item>
            <el-collapse-item title="v1.0.0 - 2021-07-08">
              <ol>
                <li>民商数据前后端分离系统正式发布</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>民生易贷app</span>
          </div>
          <div class="body">
            <img
              src="@/assets/images/download.png"
              alt="donate"
              width="100%"
            />
            <span style="display: inline-block; height: 30px; line-height: 30px"
              >民生易贷是一款可以轻松的进行借贷，得到自己需要资金的手机app。</span
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // 版本号
      version: "1.0.0",
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

