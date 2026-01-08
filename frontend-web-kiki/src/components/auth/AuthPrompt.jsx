const AuthPrompt = () => {
  return (
    <div className="text-center">
      <p className="text-lg font-medium text-gray-900">
        Please register or login as a
      </p>

      <p className="mt-1 text-lg font-medium text-gray-900">
        client to post jobs.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="rounded-md bg-purple-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition">
          Sign up
        </button>

        <button className="rounded-md border border-purple-800 px-6 py-2.5 text-sm font-semibold text-purple-800 hover:bg-purple-50 transition">
          Log in
        </button>
      </div>
    </div>
  );
};

export default AuthPrompt;
