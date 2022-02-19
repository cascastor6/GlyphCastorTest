export default function Breadcrumbs(props) {
  return (
    <nav id="bcNav">
      <ul>
        {props.crumbs.map(function (crumb) {
          function determineType() {
            if (crumb === props.crumbs[0]) {
              return "initBreadcrumb";
            } else if (crumb === props.crumbs[props.crumbs.length - 1]) {
              return "activeBreadcrumb";
            } else {
              return "ffBreadcrumb";
            }
          }
          return (
            <div className={determineType(crumb)}>
              <li>{crumb}</li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
