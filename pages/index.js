function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;

// Next.js는 어떤 작업을 하지 않아도 기본적으로 사전 렌더링을 한다.
// getStaticProps는 페이지에만 추가할 수 있으며 export해야한다.
// 페이지가 사전 생성되어야 하는 것을 Next.js에게 알려준다.
// 만약 Next.js에게 페이지가 사전렌더링되지 않도록 설정했을때, getStaticProps함수를 통해 특정 페이지를 사전렌더링하도록 적용할 수 있다.
// 항상 객체를 반환한다.
// 페이지가 사전렌더링되기 전에 데이터를 페칭해온다.
// 페이지 파일에 getStaticProps가 있으면 먼저 getStaticProps함수를 호출하고 두번째로 컴포넌트함수를 실행한다.
// 이 모든 과정은 클라이언트 사이드가 아니라 프로젝트 빌드시에 발생한다.
