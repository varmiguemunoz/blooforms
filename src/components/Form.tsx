interface FormProps {}

const Form = () => {
  return (
    <form>
      <div className="mb-6">
        <label className="block mb-2 text-sm text-background font-ligth">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm text-background font-ligth">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <a
          href="#"
          className="block text-right text-[14px] font-ligth text-blue-100 mt-2 hover:text-blue-200"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r hover:to-blue-300 from-blue-300 to-blue-500 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
      >
        login
      </button>
    </form>
  );
};
