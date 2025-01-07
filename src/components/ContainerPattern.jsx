import clsx from 'clsx';
const styles = {
  xs: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-6 lg:px-4',
  sm: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-6 lg:max-w-4xl lg:px-14',
  md: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-6 lg:max-w-6xl lg:px-10',
  lg: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-6 lg:max-w-7xl lg:px-10',
};

// Updated ContainerPattern component
export function ContainerPattern({ size = 'sm', className, ...props }) {
  return (
    <div className={clsx(styles[size], className)} {...props} />
  );
}

// Example usage for "Active Projects" button with custom styling
export function ActiveProjectsButton() {
  return (
    <ContainerPattern
      size="sm"
      className="custom-active-projects"
    >
      <button className="btn-active-projects">
        Active Projects
      </button>
    </ContainerPattern>
  );
}
