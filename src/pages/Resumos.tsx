const Resumos = () => {
  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
      {/* Card */}
      <div className="p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-40px)] bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        <div className="relative h-full border border-dashed border-gray-200 rounded-xl overflow-hidden dark:border-neutral-700">
          <div className="absolute inset-0 size-full">
            <div className="bg-[linear-gradient(45deg,var(--color-gray-100)_7.14%,transparent_7.14%,transparent_50%,var(--color-gray-100)_50%,var(--color-gray-100)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px] dark:bg-[linear-gradient(45deg,var(--color-neutral-700)_7.14%,transparent_7.14%,transparent_50%,var(--color-neutral-700)_50%,var(--color-neutral-700)_57.14%,transparent_57.14%,transparent);] size-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Resumos
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Conteúdo em desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumos;