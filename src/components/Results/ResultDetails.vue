<template>
  <div class="ResultDetails">
    <div class="ResultDetailsBox">
      <div class="title">
        <h1 class="year">2020-2021<span>学年</span></h1>
        <h2>第<span>2</span>学期</h2>
      </div>
      <div class="details">
        <van-collapse v-model="activeNames">
          <van-collapse-item class="subjects" :title="item.subName" :name="index" v-for="(item,index) in subjects">
            <template #value>
              <div>
                <span>成绩：</span>
                <span class="results">{{item.results}}</span>
              </div>
            </template>
            <div class="concent">
              <p class="subCode">课程代码：{{item.subCode}}</p>
              <span class="credits">学分：{{item.credits}}</span>
              <span class="GPA">绩点：{{item.GPA}}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultDetails",
  data() {
    return {
      activeNames: ['1'],
      //成绩
      subjects: [
        {
          subName: '数字电子技术',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '数字电子技术实验',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '社会心理学',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '网球IV',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '概率论与数理统计',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '创新教育方法',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '电基础综合课程设计',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },
        {
          subName: '形势与政策(IV)',//科目名称
          results: '90',// 成绩
          subCode: '0020408033',//课程代码
          credits: '3.0',//学分
          GPA: '3.0',//绩点
        },

      ],
    };
  },
}
</script>

<style lang="less" scoped>
.ResultDetails {
  height: 570px;
  padding: 25px 15px;
  background-color: #f7f7f7;

  .ResultDetailsBox {
    width: 100%;
    background-color: #3a80f0;
    border-radius: 15px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      .year {
        font-size: 16px;
        font-weight: normal;
      }

      h2 {
        margin: 0;
        margin-left: 10px;
        font-size: 16px;
        font-weight: normal;
      }
    }

    .details {
      .subjects::v-deep {
        text-align: left;
        .van-cell__title{
          font-weight: 700;
        }
        .van-cell__value {
          color: #000;

          .results {
            font-weight: 600;
            color: #3e802e;
          }
        }

        .concent {
          color: #44505e;

          .credits {
            margin-right: 10px;
          }
        }

      }

    }
  }
}
</style>