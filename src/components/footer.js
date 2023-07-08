function Footer() {
  const footerMenu = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];
  const renderedFooterMenu = footerMenu.map((menu) => {
    return (
      <div className="text-light" key={menu}>
        {menu}
      </div>
    );
  });
  return (
    <div className="h-[128px] w-full bg-dark-600 mt-16">
      <div className="container h-full mx-auto flex flex-row items-center gap-12">
        {renderedFooterMenu}
      </div>
    </div>
  );
}

export default Footer;
