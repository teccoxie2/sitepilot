from app.runtime_paths import writable_root


def test_writable_root_uses_data_dir(tmp_path, monkeypatch):
    target = tmp_path / "runtime-data"
    monkeypatch.setenv("DATA_DIR", str(target))
    root = writable_root()
    assert root == target
    assert root.is_dir()


def test_writable_root_without_data_dir_is_server_data(monkeypatch):
    monkeypatch.delenv("DATA_DIR", raising=False)
    root = writable_root()
    assert root.name == "data"
    assert root.parent.name == "server"
    assert root.is_dir()
