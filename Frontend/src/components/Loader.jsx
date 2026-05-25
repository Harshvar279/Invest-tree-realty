import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-6"
      >

        <h1 className="text-white text-3xl md:text-5xl tracking-[10px] font-light">
          INVEST TREE
        </h1>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ duration: 1 }}
          className="w-[1px] bg-white"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="text-white text-2xl md:text-4xl font-light"
        >
          Your Satisfaction
        </motion.div>

      </motion.div>
    </div>
  );
}
