// components/ui/card/index.jsx

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={` rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700 ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => {
  return (
    <div
      className={`p-4 border-b border-zinc-200 dark:border-zinc-700 ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export { Card, CardHeader, CardContent };