import { useEffect, useState } from 'react';
import profilePhoto from './assets/profile-photo.jpg';
import openplaceDemo from './assets/openplace-demo.mp4';
import taskflowDemo from './assets/taskflow-demo.mp4';
import oneulfarmDemo from './assets/oneulfarm-demo.mp4';
import githubMark from './assets/github-mark.svg';

const profile = {
  name: '백종진',
  birth: '2002.08.07',
  education: '충남도립대학교 (컴퓨터공학)',
  location: '충청남도 아산',
  email: 'jongjin1004baek@gmail.com',
  phone: '010-9433-5670',
  github: 'https://github.com/jong-jin624',
  intro:
    '컴퓨터공학 전공에서 운영체제, 자료구조, 알고리즘 등의 기초를 바탕으로 서비스 전체 흐름을 이해하며 프론트엔드부터 백엔드, DB, API까지 직접 설계하고 구현하는 풀스택 개발자',
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
    title: 'DevOps / Infra',
    items: ['Docker'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub'],
  },
  {
    title: 'External API',
    items: ['OAuth (Kakao / Naver / Google)', '공공데이터 API', 'PortOne (KCP)'],
  },
  {
    title: 'Architecture',
    items: ['REST API'],
  },
];

const strengths = [
  'MVC 구조 기반 백엔드 설계 경험',
  'DB 관계 설계 및 쿼리 처리 경험',
  '외부 API 및 OAuth 연동 경험',
  '협업 시 Git 브랜치 전략 사용 및 충돌 해결 경험',
  '사용자 흐름을 고려한 기능 설계 경험',
];

const techClassMap = {
  React: 'tech-react',
  JavaScript: 'tech-javascript',
  HTML: 'tech-html',
  CSS: 'tech-css',
  Java: 'tech-java',
  'Spring MVC': 'tech-spring',
  JSP: 'tech-jsp',
  MyBatis: 'tech-mybatis',
  Oracle: 'tech-oracle',
  Docker: 'tech-docker',
  Git: 'tech-git',
  GitHub: 'tech-github',
  'OAuth (Kakao / Naver / Google)': 'tech-oauth',
  '공공데이터 API': 'tech-public-api',
  'PortOne (KCP)': 'tech-portone',
  'REST API': 'tech-rest',
  Router: 'tech-router',
  Hooks: 'tech-hooks',
};

function getTechClass(item) {
  return techClassMap[item] ?? 'tech-default';
}

const education = [
  'Java 풀스택 웹개발 과정 수료',
  'AI 국제 논문 연구 진행중',
  '정보처리산업기사 필기 합격',
];

const projects = [
  {
    key: 'openplace',
    title: 'OpenPlace',
    demo: openplaceDemo,
    period: '기간: 추후 입력 예정',
    role: '담당 역할: 추후 입력 예정',
    demoLink: '배포/시연 링크: 추후 입력 예정',
    tech: ['React', 'Router', 'Hooks'],
    summary: '시민 제안에서 펀딩과 공공 개선까지 연결하는 사용자 참여형 플랫폼',
    architecture: 'React -> Router/Hooks -> localStorage 기반 상태 관리',
    flow: '시민 제안 -> 펀딩 -> 공공 개선',
    features: [
      '컴포넌트 구조 설계',
      '라우팅 구현',
      'Hooks와 localStorage 기반 상태 관리',
      '카카오맵 API를 연동해 위치 기반 정보 표시 기능 구현',
    ],
    outcomes: [
      '상태 관리 구조를 단순화하여 컴포넌트 간 의존성을 줄이고 유지보수성을 개선했습니다.',
      '사용자 흐름을 재정리해 제안 -> 펀딩 -> 결과 확인까지 자연스럽게 연결했습니다.',
    ],
    troubleshooting: [
      '요구사항 변경에 맞춰 화면 구조와 컴포넌트 책임을 재정리했습니다.',
      '상태와 UI 책임이 섞이던 구조를 분리해 데이터 흐름을 단방향으로 정리했습니다.',
      '스타일 규칙을 통일해 화면 수정 시 영향 범위를 빠르게 파악할 수 있게 했습니다.',
    ],
    deepDive: {
      problem: '페이지가 늘어나면서 제안 데이터가 여러 컴포넌트에 분산되어 수정 시 영향 범위를 파악하기 어려웠습니다.',
      cause: '상태와 UI 책임이 함께 섞여 있어 같은 데이터를 여러 곳에서 참조하는 구조가 발생했습니다.',
      solution:
        '공통 상태를 상위 컴포넌트로 올리고 컴포넌트 역할을 다시 나눠 데이터 흐름을 단방향으로 정리했습니다.',
      result: '화면 수정 시 추적해야 할 상태가 줄어들어 기능 추가와 화면 보정이 훨씬 수월해졌습니다.',
    },
    deployment:
      '컴포넌트 구조와 실행 흐름을 표준화해 협업 시 동일한 화면 결과를 유지하도록 개발 환경을 구성했습니다.',
    link: 'https://github.com/jong-jin624/openplace.git',
  },
  {
    key: 'taskflow',
    title: 'TaskFlow',
    demo: taskflowDemo,
    period: '기간: 추후 입력 예정',
    role: '담당 역할: 추후 입력 예정',
    demoLink: '배포/시연 링크: 추후 입력 예정',
    tech: ['Spring MVC', 'MyBatis', 'Oracle'],
    summary: '프로젝트, 업무, 일정 관리를 통합해 협업 흐름을 지원하는 팀 생산성 서비스',
    architecture: 'JSP -> Spring MVC -> MyBatis -> Oracle',
    flow: '프로젝트 -> Task -> 이슈 -> 일정/보고서',
    features: [
      '프로젝트, Task, 이슈 관리 기능 구현',
      '캘린더, WBS, 보고서 기능 구현',
      'Controller-Service-DAO 구조 기반 백엔드 구성',
    ],
    outcomes: [
      'Controller-Service-DAO 계층을 분리해 기능 변경 시 수정 범위를 줄이고 유지보수성을 높였습니다.',
      '프로젝트, Task, 이슈 간 FK 관계를 정리해 조회 및 저장 흐름의 일관성을 높였습니다.',
      '협업 중 충돌이 잦던 기능 병합 과정을 정리해 작업 분리와 병합 흐름을 더 명확하게 만들었습니다.',
    ],
    troubleshooting: [
      'DB 설계 과정에서 FK 관계를 정리하며 테이블 의존성을 안정화했습니다.',
      '협업 중 발생한 Git 충돌과 기능 병합 문제를 해결했습니다.',
      '요구사항 변경에 맞춰 서버 로직과 화면 흐름을 함께 조정했습니다.',
    ],
    deepDive: {
      problem: 'Task, 이슈, 일정이 서로 연결되면서 저장/조회 시 누락되거나 중복 참조되는 문제가 발생했습니다.',
      cause: '초기 테이블 설계에서 FK 관계와 서비스 계층 책임이 충분히 분리되지 않아 데이터 참조 경로가 불명확했습니다.',
      solution:
        '테이블 관계를 다시 정리하고 Service 계층에서 도메인별 처리 책임을 나눠 저장 및 조회 흐름을 재구성했습니다.',
      result: '업무 데이터 연결 구조가 안정화되어 기능 확장 시에도 참조 흐름을 예측하기 쉬운 구조를 만들었습니다.',
    },
    deployment: 'Docker를 활용해 개발 실행 환경을 컨테이너화하고 팀원 간 실행 환경 차이를 줄이는 방향으로 개발 환경을 통일했습니다.',
    link: 'https://github.com/jong-jin624/taskFlow.git',
  },
  {
    key: 'oneulfarm',
    title: 'OneulFarm',
    demo: oneulfarmDemo,
    period: '기간: 추후 입력 예정',
    role: '담당 역할: 추후 입력 예정',
    demoLink: '배포/시연 링크: 추후 입력 예정',
    tech: ['React', 'Spring MVC', 'REST API'],
    summary: '가격 데이터를 기반으로 분석, 추천, 구매까지 연결하는 농산물 서비스',
    architecture: 'React -> Spring MVC -> Oracle -> 외부 API (공공데이터 / 결제)',
    flow: '가격 -> 분석 -> 추천 -> 구매',
    features: [
      '가격 데이터를 활용한 매입 및 소분 관리 기능 구현',
      'OAuth 기반 간편 로그인 기능 구현',
      '이메일 인증 기반 임시 비밀번호 재설정 기능 구현',
    ],
    outcomes: [
      '가격 데이터를 기반으로 매입, 소분, 관리 흐름을 정리해 데이터 활용성과 업무 흐름을 높였습니다.',
      '외부 API 응답 구조를 서비스 로직에 맞게 가공해 화면과 백엔드 사이 데이터 처리 일관성을 높였습니다.',
      '로그인과 계정 복구 흐름을 정리해 사용자 인증 관련 사용성을 개선했습니다.',
    ],
    troubleshooting: [
      '데이터 기반 UX를 고려해 가격 비교와 관리 흐름을 재구성했습니다.',
      '외부 API 연동 과정에서 응답 구조를 정리하고 서비스 로직에 맞게 가공했습니다.',
      '로그인과 계정 복구 기능이 안정적으로 동작하도록 인증 흐름을 정리했습니다.',
    ],
    deepDive: {
      problem: 'OAuth 로그인 연동 과정에서 인증 상태가 불안정해 로그인 후 사용자 정보 연결이 매끄럽지 않았습니다.',
      cause: '프론트엔드와 백엔드 간 토큰 전달 및 사용자 검증 흐름이 일관되지 않아 인증 상태 해석이 달랐습니다.',
      solution:
        '인증 흐름을 다시 정리하고 로그인 이후 사용자 식별 및 검증 로직을 백엔드 기준으로 재구성했습니다.',
      result: '로그인 이후 추천, 결제, 사용자 기능이 끊기지 않는 안정적인 인증 흐름을 확보했습니다.',
    },
    deployment: 'Docker 기반 실행 환경을 고려해 서비스 실행 조건을 정리하고 기능별 의존성을 분리해 개발 환경 재현성을 높였습니다.',
    link: 'https://github.com/jong-jin624/oneulFarm.git',
  },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <div className={`app-shell ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="site-header">
        <p className="eyebrow page-title">Full Stack Developer Portfolio</p>
        <nav className="site-nav">
          <a href="#main">메인</a>
          <a href="#projects">프로젝트</a>
          <a href="#contact">연락처</a>
        </nav>
        <button
          type="button"
          className={`theme-toggle ${isDarkMode ? 'is-active' : ''}`}
          onClick={() => setIsDarkMode((prev) => !prev)}
          aria-label={isDarkMode ? '라이트모드로 전환' : '다크모드로 전환'}
        >
          <span className="toggle-thumb" />
          <span className="toggle-text">{isDarkMode ? 'Dark On' : 'Dark Off'}</span>
        </button>
      </header>

      <header className="hero" id="main">
        <div className="hero-copy-block">
          <h2>기술 스택</h2>
          <div className="hero-stack-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="hero-stack-card">
                <h3>{group.title}</h3>
                <div className="stack-list">
                  {group.items.map((item) => (
                    <span key={item} className={`stack-chip ${getTechClass(item)}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="profile-photo-wrap">
            <img src={profilePhoto} alt={`${profile.name} 증명사진`} className="profile-photo" />
          </div>
          <div className="info-row">
            <span className="info-label">이름</span>
            <span className="info-value">{profile.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">생년월일</span>
            <span className="info-value">{profile.birth}</span>
          </div>
          <div className="info-row">
            <span className="info-label">학력</span>
            <span className="info-value">{profile.education}</span>
          </div>
          <div className="info-row">
            <span className="info-label">거주지</span>
            <span className="info-value">{profile.location}</span>
          </div>
        </aside>
      </header>

      <main className="content">
        <section className="summary-grid">
          <article className="info-card">
            <h2>프로필</h2>
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

        <section className="section-block" id="projects">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>프로젝트</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.key} className="project-card">
                <div className="project-media">
                  <video className="project-video" src={project.demo} controls preload="metadata" />
                </div>

                <div className="project-top">
                  <div>
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                    </div>
                    <p className="project-meta">{project.period}</p>
                    <p className="project-meta">{project.role}</p>
                    <p className="project-meta">{project.demoLink}</p>
                  </div>
                  <div className="project-link-box">
                    <img src={githubMark} alt="" className="project-link-icon" />
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.link}
                    </a>
                  </div>
                </div>

                <div className="detail-grid">
                  <section className="detail-card">
                    <h4>한 줄 설명</h4>
                    <p>{project.summary}</p>
                  </section>

                  <section className="detail-card">
                    <h4>구조</h4>
                    <p>{project.architecture}</p>
                  </section>

                  <section className="detail-card">
                    <h4>배포 / 환경</h4>
                    <p>{project.deployment}</p>
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
                    <h4>성과 / 개선 결과</h4>
                    <ul className="plain-list">
                      {project.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="detail-card">
                    <h4>문제 해결 사례</h4>
                    <ul className="plain-list">
                      <li>{`문제: ${project.deepDive.problem}`}</li>
                      <li>{`원인: ${project.deepDive.cause}`}</li>
                      <li>{`해결: ${project.deepDive.solution}`}</li>
                      <li>{`결과: ${project.deepDive.result}`}</li>
                    </ul>
                  </section>

                  <section className="detail-card">
                    <h4>기술</h4>
                    <div className="stack-list">
                      {project.tech.map((item) => (
                        <span key={item} className={`stack-chip ${getTechClass(item)}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>연락처</h2>
          </div>

          <div className="contact-card">
            <div className="info-row">
              <span className="info-label">전화번호</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div className="info-row">
              <span className="info-label">이메일</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="info-row">
              <span className="info-label no-uppercase">GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.github}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
