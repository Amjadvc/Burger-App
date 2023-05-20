function FooterLinks(props) {
  const { content, links, target, styles } = props;
  return (
    <a href={links} target={target} className={styles}>
      {content}
    </a>
  );
}
export default FooterLinks;
