const jobs = [
  {
    title: "AI 产品经理",
    company: "星潮智能",
    salary: "25K - 40K",
    city: "上海",
    tags: ["AIGC", "产品设计", "Agent"],
    match: 96,
    summary: "负责智能助手产品设计，要求有数据分析和 AI 产品落地经验。",
  },
  {
    title: "增长产品经理",
    company: "云帆科技",
    salary: "20K - 32K",
    city: "杭州",
    tags: ["增长", "用户研究", "策略"],
    match: 89,
    summary: "面向求职平台业务，关注转化漏斗、增长实验与用户留存。",
  },
  {
    title: "数据产品经理",
    company: "新藤数智",
    salary: "22K - 35K",
    city: "深圳",
    tags: ["BI", "数据中台", "分析"],
    match: 84,
    summary: "需要搭建数据看板和策略平台，适合有项目沉淀与分析能力的候选人。",
  },
];

const industries = [
  { name: "人工智能", count: 11, share: 78 },
  { name: "企业服务", count: 7, share: 52 },
  { name: "电商零售", count: 5, share: 36 },
  { name: "金融科技", count: 4, share: 28 },
];

const kanbanData = [
  {
    title: "已投递",
    items: [
      { company: "深链科技", role: "AI 产品经理", industry: "人工智能", next: "等待 HR 初筛", time: "2 小时前" },
      { company: "北屿软件", role: "产品培训生", industry: "企业服务", next: "自动提醒 48h 后跟进", time: "今天" },
    ],
  },
  {
    title: "沟通中",
    items: [
      { company: "灵犀智联", role: "增长产品经理", industry: "互联网", next: "准备一面案例", time: "明天 14:00" },
      { company: "元图科技", role: "数据产品经理", industry: "企业服务", next: "补充作品集链接", time: "今晚" },
    ],
  },
  {
    title: "面试 / Offer",
    items: [
      { company: "曜石智能", role: "AI PM", industry: "人工智能", next: "二面后待反馈", time: "本周" },
      { company: "澄海金科", role: "策略产品经理", industry: "金融科技", next: "薪资沟通", time: "已进入 Offer 阶段" },
    ],
  },
];

function renderJobs() {
  const list = document.getElementById("job-list");
  list.innerHTML = jobs
    .map(
      (job) => `
        <article class="job-item">
          <div class="job-header">
            <strong>${job.title}</strong>
            <span class="tag">${job.match}% 匹配</span>
          </div>
          <div class="job-meta">
            <span>${job.company}</span>
            <span>${job.city}</span>
            <span>${job.salary}</span>
          </div>
          <p>${job.summary}</p>
          <div class="job-meta">${job.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
          <div class="match-bar"><span style="width: ${job.match}%"></span></div>
        </article>
      `,
    )
    .join("");
}

function renderIndustries() {
  const list = document.getElementById("industry-list");
  list.innerHTML = industries
    .map(
      (item) => `
        <article class="distribution-item">
          <div class="distribution-head">
            <strong>${item.name}</strong>
            <span>${item.count} 家</span>
          </div>
          <div class="bar-track"><span style="width: ${item.share}%"></span></div>
        </article>
      `,
    )
    .join("");
}

function renderKanban() {
  const board = document.getElementById("kanban-board");
  board.innerHTML = kanbanData
    .map(
      (column) => `
        <section class="kanban-column">
          <h4>${column.title}</h4>
          <div class="candidate-stack">
            ${column.items
              .map(
                (item) => `
                  <article class="candidate-card">
                    <strong>${item.company}</strong>
                    <p>${item.role}</p>
                    <div class="mini-meta">
                      <span>${item.industry}</span>
                      <span>${item.time}</span>
                    </div>
                    <p>${item.next}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

renderJobs();
renderIndustries();
renderKanban();
