import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ExpenseContext } from "../context/ExpenseContext";

const UpdateExpense = ({ exp }) => {
  const { AllExpence, setAllExpence } = useContext(ExpenseContext);
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    price: exp.price,
    description: exp.description,
    purpose: exp.purpose,
  });

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { price, description, purpose } = form;

    if (!description || !purpose || Number(price) <= 0) {
      Swal.fire("Failed!", "Please fill up the form correctly!", "error");
      return;
    }

    const updatedExpenses = AllExpence.map((item) =>
      item.id === exp.id
        ? { ...item, price: Number(price), description, purpose }
        : item
    );

    setAllExpence(updatedExpenses);
    localStorage.setItem("expence", JSON.stringify(updatedExpenses));

    Swal.fire("Success!", "Expense updated successfully!", "success");
    close();
  };

  return (
    <>
      <button
        onClick={open}
        className="px-2 py-1 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition"
      >
        Edit
      </button>

      <Dialog open={isOpen} onClose={close} className="relative z-10">
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <DialogTitle className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Update Expense</h3>
              <button onClick={close}>✕</button>
            </DialogTitle>

            <form onSubmit={onSubmitHandler} className="space-y-3">
              <div>
                <label>Price (BDT)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>

              <div>
                <label>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>

              <div>
                <label>Purpose</label>
                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                  required
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
              >
                Update Expense
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default UpdateExpense;
