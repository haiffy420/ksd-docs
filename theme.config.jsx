import Image from "next/image";

export default {
  logo: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Image src="/images/ksd.png" width={30} height={30} />{" "}
      <span style={{ fontWeight: "bold" }}>KSD API Docs</span>
    </div>
  ),
  project: {
    link: "https://github.com/haiffy420/ksd-docs",
  },
  docsRepositoryBase: "https://github.com/haiffy420/ksd-docs/tree/main",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="KSD API Docs" />
      <meta property="og:description" content="The documentation of KSD API" />
      <link rel="icon" type="image/x-icon" href="/images/ksd.png"></link>
    </>
  ),
};
