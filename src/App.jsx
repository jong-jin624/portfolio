const profile = {
  name: '백종진',
  email: 'jongjin1004baek@gmail.com',
  phone: '010-9433-5670',
  github: 'https://github.com/jong-jin624',
  intro: 'React부터 Spring까지 전체 웹 서비스 구조를 이해하고 구현하는 풀스택 개발자입니다.',
  summary:
    'OpenPlace, TaskFlow, OneulFarm을 개발하며 프론트엔드부터 백엔드, DB 설계, API 연동까지 전반적인 웹 개발 경험을 쌓았습니다.',
};

const stackGroups = [
  {
    title: 'Front-end',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Back-end',
    items: ['Java', 'Spring MVC', 'JSP', 'MyBatis'],
  },
  {
    title: 'DB',
    items: ['Oracle'],
  },
  {
    title: '기타',
    items: ['OAuth(카카오/네이버/구글)', '공공데이터 API', 'PortOne(KCP)', 'Git', 'REST API'],
  },
];

const strengths = [
  'MVC 구조 기반 백엔드 설계 경험',
  'DB 관계 설계 및 쿼리 처리 경험',
  '외부 API 및 OAuth 연동 경험',
  '협업 시 Git 브랜치 전략 사용 및 충돌 해결 경험',
  '사용자 흐름을 고려한 기능 설계 경험',
];

const education = [
  'Java 풀스택 웹개발 과정 수료',
  'AI 국제 논문 프로젝트 진행중',
  '정보처리산업기사 필기 합격',
];

const projects = [
  {
    key: 'openplace',
    title: 'OpenPlace',
    tag: '입문',
    overview: '시민 제안에서 펀딩, 공공 개선으로 이어지는 사용자 참여형 플랫폼입니다.',
    tech: ['React', 'Router', 'Hooks'],
    flow: '시민 제안 -> 펀딩 -> 공공 개선',
    features: [
      '컴포넌트 구조 설계',
      '라우팅 구현',
      'Hooks와 localStorage 기반 상태 관리',
    ],
    troubleshooting: [
      '요구사항 변경에 맞춰 화면 구조와 컴포넌트 책임을 재정리했습니다.',
      '상태 관리 구조를 단순화해 페이지 간 데이터 흐름을 정리했습니다.',
      'CSS 스타일 규칙을 통일해 유지보수성을 높였습니다.',
    ],
    link: '프로젝트 링크 정리 예정',
  },
  {
    key: 'taskflow',
    title: 'TaskFlow',
    tag: '백엔드 핵심',
    overview: '프로젝트, 업무, 일정 관리를 위한 협업 도구 프로젝트입니다.',
    tech: ['Spring MVC', 'MyBatis', 'Oracle'],
    flow: '프로젝트 -> Task -> 이슈 -> 일정/보고서',
    features: [
      '프로젝트, Task, 이슈 관리 기능 구현',
      '캘린더, WBS, 보고서 기능 구현',
      'Controller-Service-DAO 구조 기반 백엔드 구성',
    ],
    troubleshooting: [
      'DB 설계 과정에서 FK 관계를 정리하며 테이블 의존성을 안정화했습니다.',
      '협업 중 발생한 Git 충돌과 기능 병합 문제를 해결했습니다.',
      '요구사항에 맞춰 서버 로직과 화면 흐름을 함께 조정했습니다.',
    ],
    link: '프로젝트 링크 정리 예정',
  },
  {
    key: 'oneulfarm',
    title: 'OneulFarm',
    tag: '데이터 + 서비스 설계',
    overview: '농산물 가격 기반으로 분석, 추천, 구매까지 연결하는 서비스입니다.',
    tech: ['React', 'Spring MVC', 'REST API'],
    flow: '가격 -> 분석 -> 추천 -> 구매',
    features: [
      '가격 시각화 및 추천 로직 구현',
      'AI 식단 추천과 상품 연결 기능 구현',
      '결제 시스템 KCP 연동 및 OAuth 로그인 구현',
    ],
    troubleshooting: [
      '데이터 기반 UX를 고려해 가격 비교와 추천 흐름을 재구성했습니다.',
      '외부 API 연동 과정에서 응답 구조를 정리하고 서비스 로직에 맞게 가공했습니다.',
      '로그인, 결제, 추천 기능이 연결되도록 전체 사용자 흐름을 설계했습니다.',
    ],
    link: '프로젝트 링크 정리 예정',
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy-block">
          <p className="eyebrow">Full Stack Developer Portfolio</p>
          <h1>
            백종진
            <br />
            <span>서비스 흐름을 끝까지 구현하는 풀스택 개발자</span>
          </h1>
          <p className="hero-copy">{profile.intro}</p>
          <p className="hero-summary">{profile.summary}</p>
        </div>

        <aside className="hero-panel">
          <div className="info-row">
            <span className="info-label">이메일</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="info-row">
            <span className="info-label">전화번호</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="info-row">
            <span className="info-label">GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub 바로가기
            </a>
          </div>
        </aside>
      </header>

      <main className="content">
        <section className="summary-grid">
          <article className="info-card">
            <h2>한줄 소개</h2>
            <p>{profile.intro}</p>
          </article>

          <article className="info-card">
            <h2>경험 / 강점</h2>
            <ul className="plain-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <h2>교육 / 활동</h2>
            <ul className="plain-list">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section-block">
          <div className="section-head">
            <p className="eyebrow">Skill Set</p>
            <h2>기술 스택</h2>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <div className="stack-list">
                  {group.items.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>프로젝트</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.key} className="project-card">
                <div className="project-top">
                  <div>
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span className="project-tag">{project.tag}</span>
                    </div>
                    <p className="project-overview">{project.overview}</p>
                  </div>
                  <div className="project-link-box">
                    <span className="info-label">프로젝트 링크</span>
                    <p>{project.link}</p>
                  </div>
                </div>

                <div className="detail-grid">
                  <section className="detail-card">
                    <h4>개요</h4>
                    <p>{project.overview}</p>
                    <p className="flow-text">{project.flow}</p>
                  </section>

                  <section className="detail-card">
                    <h4>기술</h4>
                    <div className="stack-list">
                      {project.tech.map((item) => (
                        <span key={item} className="stack-chip accent-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="detail-card">
                    <h4>내가 개발한 기능</h4>
                    <ul className="plain-list">
                      {project.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="detail-card">
                    <h4>트러블슈팅 / 경험</h4>
                    <ul className="plain-list">
                      {project.troubleshooting.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
