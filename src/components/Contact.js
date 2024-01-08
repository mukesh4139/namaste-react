const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>

      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Email"
        />
        <button className="border border-black rounded-md p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
